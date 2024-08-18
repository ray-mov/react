import { createClient } from "@supabase/supabase-js";
import { SUPERBASE_URL, SUPERBASE_kEY } from "../config/config";



export const supabase = createClient(SUPERBASE_URL, SUPERBASE_kEY);
