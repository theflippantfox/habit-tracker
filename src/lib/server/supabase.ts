import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zircjyyqrajhnykfyxhm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcmNqeXlxcmFqaG55a2Z5eGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2Njc3MjMsImV4cCI6MjA1MjI0MzcyM30.cq6FW87IxNaPUOxfAFsn0a3B4on-eP1Qbnii-IRX4P8'
export const supabase = createClient(supabaseUrl, supabaseKey)
