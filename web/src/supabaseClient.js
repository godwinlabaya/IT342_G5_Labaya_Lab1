import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fuaepxloghfyfqouucqf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1YWVweGxvZ2hmeWZxb3V1Y3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4Nzk0MzUsImV4cCI6MjA4NzQ1NTQzNX0.vLzkqMrWCBSMP1gjZtSzpeZRKahAdxHj-t7-y0fUELs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);