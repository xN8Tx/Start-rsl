--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-04-26 01:11:56 +07

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
-- TOC entry 214 (class 1259 OID 16591)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id bigint NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) NOT NULL,
    cover character varying NOT NULL,
    experience integer NOT NULL,
    material character varying NOT NULL,
    level integer NOT NULL,
    rating character varying
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16632)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16594)
-- Name: level; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.level (
    id integer NOT NULL,
    level character varying(50)
);


ALTER TABLE public.level OWNER TO postgres;

--
-- TOC entry 3612 (class 0 OID 16591)
-- Dependencies: 214
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, name, description, cover, experience, material, level, rating) FROM stdin;
2	Фрукты	Фрукты очень важная часть здорового питания и жизни. Они содержат множество витаминов и полки с ними в магазинах всегда стоят в самом начале магазина. Их названия довольно часто можно услышать в разговорах о еде, так что предлагаем выучить парочку из них	http://localhost:8080/api/images/2023-04-20T16-49-05.182Z-1425521.webp	200	[{"id":1,"name":"Слово 1","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":2,"name":"Слово 2","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":3,"name":"Слово 3","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":4,"name":"Слово 4","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":5,"name":"Слово 5","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":6,"name":"Слово 6","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":7,"name":"Слово 7","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":8,"name":"Слово 8","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":9,"name":"Предложение 1","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"},{"id":10,"name":"Предложение 2","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"}]	0	[]
7	Овощи\n	Все из нас если овощи, ведь они очень полезные и вкусные! И их названия так же полезно знать!	http://localhost:8080/api/images/2023-04-20T19-29-35.227Z-11055633.webp	200	[{"id":1,"name":"Слово 1","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":2,"name":"Слово 2","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":3,"name":"Слово 3","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":4,"name":"Слово 4","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":5,"name":"Слово 5","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":6,"name":"Слово 6","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":7,"name":"Слово 7","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":8,"name":"Слово 8","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":9,"name":"Предложение 1","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"},{"id":10,"name":"Предложение 2","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"}]	1	[]
5	Профессии	Когда-то мы все получим свою профессию (или уже имеем), так что пора узнать парочку слов	http://localhost:8080/api/images/2023-04-20T19-26-28.293Z-10868699.webp	200	[{"id":1,"name":"Слово 1","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":2,"name":"Слово 2","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":3,"name":"Слово 3","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":4,"name":"Слово 4","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":5,"name":"Слово 5","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":6,"name":"Слово 6","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":7,"name":"Слово 7","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":8,"name":"Слово 8","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":9,"name":"Предложение 1","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"},{"id":10,"name":"Предложение 2","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"}]	2	[]
3	Животные\n	Животные бывают абсолютно разные и всех из них мы затронуть конечно не сможем, но парочку узнаем!	http://localhost:8080/api/images/2023-04-20T19-29-42.122Z-11062528.webp	200	[{"id":1,"name":"Слово 1","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":2,"name":"Слово 2","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":3,"name":"Слово 3","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":4,"name":"Слово 4","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":5,"name":"Слово 5","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":6,"name":"Слово 6","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":7,"name":"Слово 7","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":8,"name":"Слово 8","type":"Слово","src":"http://localhost:8080/api/videos/test.mp4"},{"id":9,"name":"Предложение 1","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"},{"id":10,"name":"Предложение 2","type":"Предложение","src":"http://localhost:8080/api/videos/test.mp4"}]	0	[]
\.


--
-- TOC entry 3613 (class 0 OID 16594)
-- Dependencies: 215
-- Data for Name: level; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.level (id, level) FROM stdin;
0	Начинающий
1	Средний
2	Профессионал
\.


--
-- TOC entry 3620 (class 0 OID 0)
-- Dependencies: 216
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 41, true);


--
-- TOC entry 3466 (class 2606 OID 16657)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3468 (class 2606 OID 16650)
-- Name: level level_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.level
    ADD CONSTRAINT level_pkey PRIMARY KEY (id);


--
-- TOC entry 3469 (class 2606 OID 16651)
-- Name: courses level_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT level_id FOREIGN KEY (level) REFERENCES public.level(id) NOT VALID;


-- Completed on 2023-04-26 01:11:56 +07

--
-- PostgreSQL database dump complete
--

