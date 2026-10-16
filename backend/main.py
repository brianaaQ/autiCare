from fastapi import FastAPI

app = FastAPI(
    title="AutiCare AI API",
    description="Support platform for parents and caregivers of autistic children.",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "app": "AutiCare AI",
        "status": "running",
    }


@app.get("/health")
def health_check():
    return {"status": "ok"}
