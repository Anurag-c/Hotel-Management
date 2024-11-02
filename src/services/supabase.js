import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zxagxteycxumtwpjpppi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YWd4dGV5Y3h1bXR3cGpwcHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NzU5NDcsImV4cCI6MjA0NjE1MTk0N30.9e8MaJSIfBpDqc0XUA8Vyr7eMfH5s5_KAeZc6uSQQ8A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
