import { NextResponse } from 'next/server'

export const PATCH = async (request: Request, {params}: {params: {id: string }}) => {
  const { id } = params
  const body = await request.json()
  const response = await fetch(`http://localhost:3001/expenses/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await response.json()
  return NextResponse.json(data)
}

export const DELETE = async (request: Request, {params}: {params: {id: string }}) => {
  const { id } = params
  const response = await fetch(`http://localhost:3001/expenses/${id}`, {
    method: 'DELETE'
  })
  return NextResponse.json({ message: 'Deleted' })
}