import { createClient } from '@supabase/supabase-js';

import { SUPABASE_KEY } from '../libs/env';

const supabaseKey = SUPABASE_KEY;

const supabaseUrl = 'https://dizxyeocxptxsnhuicta.supabase.co';
const supabase = createClient(supabaseUrl, supabaseKey);

export default { supabase };
export { supabase };
