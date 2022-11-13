import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://andjdtdjcogdjxeiidjo.supabase.co';
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZGpkdGRqY29nZGp4ZWlpZGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTg5NzUsImV4cCI6MTk4Mzc5NDk3NX0.RczardjqaC7bJQLv-s7UlNxIjJsAnMLAdLXUE75Qm2c";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");

        }
    };
}