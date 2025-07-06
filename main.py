from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from gpiozero import PWMLED
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(redirect_slashes=False)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

led = PWMLED(17)

class BrightnessRequest(BaseModel):
    value: float

@app.post("/brightness")
def set_brightness(data: BrightnessRequest):
    try:
        duty_cycle = max(0, min(data.value / 100.0, 1.0))
        led.value = duty_cycle
        return {"status": "ok", "duty_cycle": duty_cycle}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))