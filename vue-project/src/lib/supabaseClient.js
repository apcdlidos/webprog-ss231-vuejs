import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://gpysmjqpetxyjxfdekem.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdweXNtanFwZXR4eWp4ZmRla2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzgxNDAsImV4cCI6MjA1NDQxNDE0MH0.tCWZUNHo7JP-vJlybfn6GzdUWvZFh9Gw2zxdpLNGDJ4')