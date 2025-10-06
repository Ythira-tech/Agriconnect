import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Alert, Badge } from "react-bootstrap";

/**
 * Advanced Planting & Harvest Calendar
 * - Built-in crop database with per-region planting windows and growing days
 * - Visual 12-month grid with highlighted planting and harvest months
 * - Generates estimated dates and allows ICS download + local save
 */

/* ---------- Helper Data & Functions ---------- */

// small example crop DB — extend this with more crops & real agronomic values
const cropDatabase = {
  maize: {
    display: "Maize",
    growingDays: 120,
    plantingWindowsByRegion: {
      "Central Kenya": [3, 5], // March - May (short rains)
      "Western Kenya": [3, 4], // March - April
      "Coastal Kenya": [10, 12], // Oct - Dec (short rains)
      "Nairobi": [3, 5],
      "Default": [3, 5],
    },
  },
  beans: {
    display: "Beans",
    growingDays: 70,
    plantingWindowsByRegion: {
      "Central Kenya": [3, 4],
      "Western Kenya": [10, 11],
      "Coastal Kenya": [11, 12],
      "Nairobi": [3, 4],
      "Default": [3, 4],
    },
  },
  tomato: {
    display: "Tomato",
    growingDays: 90,
    plantingWindowsByRegion: {
      "Central Kenya": [9, 11],
      "Western Kenya": [2, 4],
      "Coastal Kenya": [9, 11],
      "Nairobi": [9, 11],
      "Default": [9, 11],
    },
  },
  potatoes: {
    display: "Potatoes",
    growingDays: 120,
    plantingWindowsByRegion: {
      "Central Kenya": [2, 4],
      "Western Kenya": [2, 4],
      "Coastal Kenya": [3, 5],
      "Nairobi": [2, 4],
      "Default": [2, 4],
    },
  },
  rice: {
    display: "Rice",
    growingDays: 140,
    plantingWindowsByRegion: {
      "Western Kenya": [3, 5],
      "Coastal Kenya": [11, 1], // wraps year (Nov - Jan)
      "Default": [3, 5],
    },
  },
};

const regions = [
  "Central Kenya",
  "Western Kenya",
  "Coastal Kenya",
  "Nairobi",
  "Default",
];

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// helper to produce a date object estimate: planting on 1st of plantingMonth in current or next year
function estimateDates(plantStartMonth, cropGrowingDays) {
  // plantStartMonth is 1..12 (month index)
  const now = new Date();
  const year = now.getFullYear();
  // choose planting year: if planting month already passed use next year
  const plantYear = (plantStartMonth - 1) < now.getMonth() ? year + 1 : year;
  const plantDate = new Date(plantYear, plantStartMonth - 1, 1);
  const harvestDate = new Date(plantDate);
  harvestDate.setDate(harvestDate.getDate() + cropGrowingDays);
  return { plantDate, harvestDate };
}

// makes an .ics file string for a single event
function makeICS(title, description, dtStart, dtEnd) {
  const toICSDate = (d) => {
    // format: YYYYMMDDTHHMMSSZ (we'll use local midnight -> better to use all-day event YYYYMMDD)
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}T000000Z`;
  };

  const uid = `agriconnect-${Date.now()}@agriconnect.local`;
  const dtstamp = toICSDate(new Date());
  const start = toICSDate(dtStart);
  const end = toICSDate(dtEnd);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Agriconnect//Planting Calendar//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART;VALUE=DATE:${start.slice(0,8)}`,
    `DTEND;VALUE=DATE:${end.slice(0,8)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
}

/* ---------- React Component ---------- */

export default function PlantingAndHarvestCalendar() {
  const [selectedRegion, setSelectedRegion] = useState("Central Kenya");
  const [selectedCropKey, setSelectedCropKey] = useState("maize");
  const [customStartMonth, setCustomStartMonth] = useState(null); // optional override month number 1..12
  const [schedule, setSchedule] = useState(null);
  const [savedSchedules, setSavedSchedules] = useState([]);

  useEffect(() => {
    // load saved schedules from localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("agriconnect_schedules") || "[]");
      setSavedSchedules(existing);
    } catch {
      setSavedSchedules([]);
    }
  }, []);

  const computeSchedule = () => {
    const crop = cropDatabase[selectedCropKey];
    if (!crop) return;

    // find planting window for region
    const window = crop.plantingWindowsByRegion[selectedRegion] || crop.plantingWindowsByRegion["Default"];
    let startMonth = window[0]; // 1..12
    let endMonth = window[1];

    // allow user override
    if (customStartMonth) startMonth = Number(customStartMonth);

    // compute harvest approximate date from the start month
    const { plantDate, harvestDate } = estimateDates(startMonth, crop.growingDays);

    // build visual months array (1..12) marking planting months and harvest month
    const months = monthNames.map((m, idx) => ({
      idx: idx + 1,
      name: m,
      isPlanting: isMonthInRange(idx + 1, window),
      isHarvest: (Math.floor((harvestDate.getMonth() + 1)) === (idx + 1)),
    }));

    const scheduleObj = {
      cropKey: selectedCropKey,
      cropName: crop.display,
      region: selectedRegion,
      startMonth,
      endMonth,
      plantDate,
      harvestDate,
      months,
      createdAt: new Date().toISOString(),
    };

    setSchedule(scheduleObj);
    return scheduleObj;
  };

  function isMonthInRange(monthNum, window) {
    // window like [start, end] where end may be < start (wraps year)
    const [s, e] = window;
    if (s <= e) {
      return monthNum >= s && monthNum <= e;
    } else {
      // wrap case, e.g. [11, 2]
      return monthNum >= s || monthNum <= e;
    }
  }

  const handleSaveSchedule = () => {
    if (!schedule) {
      alert("Generate a schedule first.");
      return;
    }
    const newList = [schedule, ...savedSchedules];
    setSavedSchedules(newList);
    localStorage.setItem("agriconnect_schedules", JSON.stringify(newList));
    alert("Schedule saved locally!");
  };

  const handleDownloadICS = (which = "plant") => {
    if (!schedule) {
      alert("Generate a schedule first.");
      return;
    }
    const start = which === "plant" ? schedule.plantDate : schedule.harvestDate;
    const end = new Date(start);
    end.setDate(start.getDate() + 1); // one-day event
    const title = `${which === "plant" ? "Planting" : "Harvest"} - ${schedule.cropName} (${schedule.region})`;
    const desc = `${which === "plant" ? "Recommended planting day" : "Estimated harvest day"} for ${schedule.cropName} in ${schedule.region}. Generated by Agriconnect.`;
    const ics = makeICS(title, desc, start, end);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `agriconnect-${schedule.cropKey}-${which}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteSaved = (index) => {
    const newList = savedSchedules.slice();
    newList.splice(index, 1);
    setSavedSchedules(newList);
    localStorage.setItem("agriconnect_schedules", JSON.stringify(newList));
  };

  return (
    <Container className="py-4">
      <h2 className="text-success fw-bold text-center mb-3">🗓️ Planting & Harvest Calendar</h2>
      <p className="text-muted text-center">Advanced planner — select your region and crop for data-driven planting windows and harvest estimates.</p>

      <Row className="g-4">
        <Col md={5}>
          <Card className="p-3 shadow-sm border-0">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Region</Form.Label>
                <Form.Select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                  {regions.map((r) => <option key={r} value={r}>{r}</option>)}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Crop</Form.Label>
                <Form.Select value={selectedCropKey} onChange={(e) => setSelectedCropKey(e.target.value)}>
                  {Object.entries(cropDatabase).map(([key, val]) => (
                    <option key={key} value={key}>{val.display}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Optional: Override planting start month</Form.Label>
                <Form.Select value={customStartMonth || ""} onChange={(e) => setCustomStartMonth(e.target.value || null)}>
                  <option value="">(use recommended)</option>
                  {monthNames.map((m, idx) => <option key={m} value={idx+1}>{m}</option>)}
                </Form.Select>
                <Form.Text className="text-muted">Use only if you want a custom planting month.</Form.Text>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button variant="success" onClick={() => computeSchedule()}>Generate Schedule</Button>
                <Button variant="outline-success" onClick={() => { setSchedule(null); setCustomStartMonth(null); }}>Reset</Button>
              </div>
            </Form>
          </Card>

          {/* Saved schedules */}
          <Card className="p-3 mt-3 shadow-sm border-0">
            <h6>Saved Schedules</h6>
            {savedSchedules.length === 0 ? (
              <p className="text-muted">No saved schedules yet.</p>
            ) : (
              savedSchedules.map((s, i) => (
                <div key={i} className="mb-2 d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{s.cropName}</strong> — {s.region} <br/>
                    <small className="text-muted">Plant: {new Date(s.plantDate).toLocaleDateString()} | Harvest: {new Date(s.harvestDate).toLocaleDateString()}</small>
                  </div>
                  <div className="d-flex gap-2">
                    <Button size="sm" variant="outline-success" onClick={() => { setSchedule(s); window.scrollTo({top:0, behavior:"smooth"}); }}>Open</Button>
                    <Button size="sm" variant="danger" onClick={() => handleDeleteSaved(i)}>Delete</Button>
                  </div>
                </div>
              ))
            )}
          </Card>
        </Col>

        <Col md={7}>
          <Card className="p-3 shadow-sm border-0">
            <h5 className="mb-3">Visual Calendar (12 months)</h5>

            {/* Month grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 8 }}>
              {monthNames.map((m, idx) => {
                const monthNum = idx + 1;
                const plantMark = schedule?.months?.find(x => x.idx === monthNum)?.isPlanting;
                const harvestMark = schedule?.months?.find(x => x.idx === monthNum)?.isHarvest;
                const bg = harvestMark ? "#ffe6c2" : plantMark ? "#e6f9ea" : "#f8f9fa";
                const border = harvestMark ? "2px solid #ff9800" : plantMark ? "2px solid #2e7d32" : "1px solid #dee2e6";
                return (
                  <div key={m} style={{
                    padding: 10,
                    borderRadius: 6,
                    background: bg,
                    border,
                    textAlign: "center",
                    minHeight: 74,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                    <div style={{ fontWeight: 700 }}>{m}</div>
                    <div style={{ fontSize: 12, marginTop: 6 }}>
                      {plantMark && <Badge bg="success" pill>Plant</Badge>}
                      {harvestMark && <Badge bg="warning" text="dark" style={{ marginLeft: 6 }}>Harvest</Badge>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed schedule */}
            <div className="mt-3">
              {!schedule ? (
                <Alert variant="info">Generate a schedule to see detailed planting & harvest dates.</Alert>
              ) : (
                <>
                  <h6>Schedule for <span className="text-success">{schedule.cropName}</span> — <small className="text-muted">{schedule.region}</small></h6>
                  <p>
                    <strong>Recommended Planting Window:</strong> {monthNames[schedule.startMonth - 1]} to {monthNames[schedule.endMonth - 1]}
                    <br/>
                    <strong>Estimated Planting Date:</strong> {schedule.plantDate.toLocaleDateString()}
                    <br/>
                    <strong>Estimated Harvest Date:</strong> {schedule.harvestDate.toLocaleDateString()}
                    <br/>
                    <strong>Estimated Growing Period:</strong> {Math.round((schedule.harvestDate - schedule.plantDate)/(1000*60*60*24))} days
                  </p>

                  <div className="d-flex gap-2">
                    <Button variant="success" onClick={() => handleDownloadICS("plant")}>Download Planting .ics</Button>
                    <Button variant="outline-success" onClick={() => handleDownloadICS("harvest")}>Download Harvest .ics</Button>
                    <Button variant="secondary" onClick={() => handleSaveSchedule()}>Save Schedule</Button>
                  </div>
                </>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
