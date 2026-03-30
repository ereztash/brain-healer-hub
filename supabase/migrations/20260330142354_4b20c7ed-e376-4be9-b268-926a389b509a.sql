CREATE TABLE public.webinar_registrants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  linkedin_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.webinar_registrants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for webinar"
  ON public.webinar_registrants
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read registrants"
  ON public.webinar_registrants
  FOR SELECT
  TO service_role
  USING (true);