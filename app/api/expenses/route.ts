import { NextResponse } from 'next/server'

fetch('http://localhost:3001/expenses')

export const GET = async () => {
  const response = await fetch('http://localhost:3001/expenses')
  const data = await response.json()
  return NextResponse.json(data)
}

export const POST = async (request: Request) => {
  const body = await request.json() //reads the data
  const response = await fetch('http://localhost:3001/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await response.json() //reads the data sent back
  return NextResponse.json(data, {status: 201})
}