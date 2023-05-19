--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-04-26 01:12:20 +07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16586)
-- Name: passwords; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.passwords (
    id bigint NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.passwords OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16585)
-- Name: passwords_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.passwords ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.passwords_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3606 (class 0 OID 16586)
-- Dependencies: 215
-- Data for Name: passwords; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.passwords (id, email, password) FROM stdin;
17	test5@example.com	$2b$10$pF2BMlwnA30wrN39ueY1gu6tPck/Yg1awhAgTEh7jlplaX8nSTQU6
26	test@example.com	$2b$10$sudke5OiI93w.Burss67xuWOnphIXUrcJ2OuvbTUJ821yfWtHP1su
\.


--
-- TOC entry 3612 (class 0 OID 0)
-- Dependencies: 214
-- Name: passwords_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.passwords_id_seq', 28, true);


--
-- TOC entry 3462 (class 2606 OID 16590)
-- Name: passwords passwords_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.passwords
    ADD CONSTRAINT passwords_pkey PRIMARY KEY (id, password, email);


-- Completed on 2023-04-26 01:12:20 +07

--
-- PostgreSQL database dump complete
--

