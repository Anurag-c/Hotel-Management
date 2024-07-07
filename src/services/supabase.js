import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gdbpdiciwmawtjbktmmo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkYnBkaWNpd21hd3RqYmt0bW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMDU1MzYsImV4cCI6MjAzMjU4MTUzNn0.F-5G5HTYr2amBN-N3vWqV_7_8ndzYKuF7R8lEXMWBBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
