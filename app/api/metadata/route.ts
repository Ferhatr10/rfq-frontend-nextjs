import { NextResponse } from "next/server"

export async function GET() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

    try {
        const response = await fetch(`${API_URL}/metadata`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch metadata" }, { status: response.status })
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error("Metadata proxy error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
