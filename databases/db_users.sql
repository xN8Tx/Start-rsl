--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-04-26 01:12:49 +07

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
-- TOC entry 214 (class 1259 OID 16597)
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    course_id bigint NOT NULL,
    body character varying NOT NULL,
    date date NOT NULL,
    likes character varying,
    dislikes character varying
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16622)
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.comments ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16600)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id integer NOT NULL,
    role character varying(50)
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16663)
-- Name: todo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todo (
    id bigint NOT NULL,
    user_id bigint,
    body character varying(50) NOT NULL,
    status boolean
);


ALTER TABLE public.todo OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16662)
-- Name: todo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.todo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.todo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16603)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    date date NOT NULL,
    experience integer NOT NULL,
    role integer NOT NULL,
    avatar character varying NOT NULL,
    cover character varying NOT NULL,
    certificates character varying,
    courses character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3625 (class 0 OID 16597)
-- Dependencies: 214
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, user_id, course_id, body, date, likes, dislikes) FROM stdin;
28	17	3	Новый комментарий	2023-02-04	[]	["26"]
46	17	7	Cfvdfd	2023-10-04	[]	[]
47	17	6	ногие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по т	2023-12-04	[]	[]
10	14	3	Автор балбес	2023-03-29	[]	[]
11	14	2	Автор балбес	2023-03-29	["17"]	[]
18	14	2	Some textfadsdsasdsasdasd	2023-02-04	["17"]	[]
17	17	2	Коты правят миром!	2023-03-29	["17"]	[]
2	14	5	Автор балбес	2023-03-29	[]	[]
4	14	7	Автор балбес	2023-03-29	[]	[]
9	14	4	Автор балбес	2023-03-29	[]	[]
12	17	7	Коты правят миром!	2023-03-29	[]	[]
14	17	5	Коты правят миром!	2023-03-29	[]	[]
15	17	4	Коты правят миром!	2023-03-29	[]	[]
16	17	3	Коты правят миром!	2023-03-29	["26"]	[]
\.


--
-- TOC entry 3626 (class 0 OID 16600)
-- Dependencies: 215
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (id, role) FROM stdin;
1	Мут
2	Пользователь
3	Модератор
4	Администратор
\.


--
-- TOC entry 3630 (class 0 OID 16663)
-- Dependencies: 219
-- Data for Name: todo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.todo (id, user_id, body, status) FROM stdin;
20	17	Go to gym	t
\.


--
-- TOC entry 3627 (class 0 OID 16603)
-- Dependencies: 216
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, surname, date, experience, role, avatar, cover, certificates, courses) FROM stdin;
14	Evgeniy	Shteyn	2023-03-29	19000	4	http://localhost:8080/api/images/avatar2.webp	http://localhost:8080/api/images/cover.webp	["http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp"]	\N
26	Замученный	Лох	2023-04-16	20	1	http://localhost:8080/api/images/2023-04-19T16-04-22.943Z-1208424.webp	http://localhost:8080/api/images/2023-04-19T16-04-29.745Z-1215226.webp	\N	[{"id":"6","status":[{"id":1,"status":true},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false},{"id":8,"status":false},{"id":9,"status":false},{"id":10,"status":false}]},{"id":"4","status":[{"id":1,"status":false},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false},{"id":8,"status":false},{"id":9,"status":false},{"id":10,"status":false}]}]
17	Котыsss	ПравятМиром!	2023-03-29	670	4	http://localhost:8080/api/images/2023-04-22T12-54-23.923Z-160149071.webp	http://localhost:8080/api/images/2023-04-22T12-54-14.574Z-160139721.webp	["http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp","http://localhost:8080/api/images/certificate.webp"]	[{"id":"6","status":[{"id":1,"status":true},{"id":2,"status":true},{"id":3,"status":true},{"id":4,"status":true},{"id":5,"status":true},{"id":6,"status":true},{"id":7,"status":true},{"id":8,"status":true},{"id":9,"status":true},{"id":10,"status":true}]},{"id":"3","status":[{"id":1,"status":true},{"id":2,"status":true},{"id":3,"status":true},{"id":4,"status":true},{"id":5,"status":true},{"id":6,"status":true},{"id":7,"status":true},{"id":8,"status":true},{"id":9,"status":true},{"id":10,"status":true}]},{"id":"5","status":[{"id":1,"status":false},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false},{"id":8,"status":false},{"id":9,"status":false},{"id":10,"status":false}]},{"id":"4","status":[{"id":1,"status":true},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false},{"id":8,"status":false},{"id":9,"status":false},{"id":10,"status":false}]},{"id":"7","status":[{"id":1,"status":false},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false},{"id":8,"status":false},{"id":9,"status":false},{"id":10,"status":false}]},{"id":"38","status":[{"id":1,"status":false},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false}]},{"id":"40","status":[{"id":1,"status":false}]},{"id":"2","status":[{"id":1,"status":true},{"id":2,"status":false},{"id":3,"status":false},{"id":4,"status":false},{"id":5,"status":false},{"id":6,"status":false},{"id":7,"status":false},{"id":8,"status":false},{"id":9,"status":false},{"id":10,"status":false}]}]
\.


--
-- TOC entry 3636 (class 0 OID 0)
-- Dependencies: 217
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 49, true);


--
-- TOC entry 3637 (class 0 OID 0)
-- Dependencies: 218
-- Name: todo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.todo_id_seq', 26, true);


--
-- TOC entry 3475 (class 2606 OID 16631)
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- TOC entry 3477 (class 2606 OID 16621)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- TOC entry 3481 (class 2606 OID 16667)
-- Name: todo todo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);


--
-- TOC entry 3479 (class 2606 OID 16608)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3482 (class 2606 OID 16668)
-- Name: todo user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;


-- Completed on 2023-04-26 01:12:49 +07

--
-- PostgreSQL database dump complete
--

