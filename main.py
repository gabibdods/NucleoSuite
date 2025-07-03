# Force gpiozero to use NativeFactory before anything else
from gpiozero.pins.native import NativeFactory
from gpiozero import Device
Device.pin_factory = NativeFactory()

# Now import and use GPIO features
from gpiozero import PWMLED
from fastapi import FastAPI

# Confirm which factory is being used (debug print)
print("Using pin factory:", Device._default_pin_factory())

# Setup GPIO
led = PWMLED(17)

# Setup FastAPI
app = FastAPI()

@app.put("/brightness/{brightness}")
def set_brightness(brightness: float):
    led.value = brightness / 100
    return {"brightness": brightness}
