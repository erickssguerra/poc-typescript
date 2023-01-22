--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

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
-- Name: courses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);


--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: customers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    name text NOT NULL,
    cpf character varying(11) NOT NULL,
    email text,
    CONSTRAINT chk_cpf1 CHECK (((cpf)::text ~ '^[0-9]*$'::text)),
    CONSTRAINT chk_cpf2 CHECK ((length((cpf)::text) = 11)),
    CONSTRAINT chk_email1 CHECK ((email ~~ '%_@__%.__%'::text))
);


--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- Name: enrollments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.enrollments (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    course_id integer NOT NULL
);


--
-- Name: enrollments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.enrollments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: enrollments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.enrollments_id_seq OWNED BY public.enrollments.id;


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- Name: enrollments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enrollments ALTER COLUMN id SET DEFAULT nextval('public.enrollments_id_seq'::regclass);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.courses VALUES (1, 'Spining');
INSERT INTO public.courses VALUES (2, 'Musculação');
INSERT INTO public.courses VALUES (3, 'Jumping');
INSERT INTO public.courses VALUES (4, 'Cross-training');
INSERT INTO public.courses VALUES (5, 'Funcional');
INSERT INTO public.courses VALUES (6, 'Dança');
INSERT INTO public.courses VALUES (7, 'LPO');
INSERT INTO public.courses VALUES (8, 'Zumba');
INSERT INTO public.courses VALUES (9, 'Hidroginástica');


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.customers VALUES (2, 'Érick', '12345678910', 'erick@gmail.com');
INSERT INTO public.customers VALUES (3, 'José', '12345678911', 'jose@gmail.com');
INSERT INTO public.customers VALUES (4, 'Maria', '12345678912', 'maria@gmail.com');
INSERT INTO public.customers VALUES (5, 'Débora', '12345678913', 'debora@gmail.com');
INSERT INTO public.customers VALUES (6, 'Carlos', '12345678914', 'carlos@gmail.com');
INSERT INTO public.customers VALUES (7, 'Stefani', '12345678915', 'stefani@gmail.com');
INSERT INTO public.customers VALUES (8, 'Fagner', '12345678916', 'fagner@gmail.com');
INSERT INTO public.customers VALUES (9, 'Felipe', '12345678917', 'felipe@gmail.com');
INSERT INTO public.customers VALUES (15, 'Hugo', '12345678918', 'hugo@gmail.com');
INSERT INTO public.customers VALUES (20, 'Fernando', '12345678919', 'fernando@gmail.com');
INSERT INTO public.customers VALUES (23, 'Lula', '00000000013', 'lula@gmail.com');
INSERT INTO public.customers VALUES (24, 'Kelly', '01234567891', 'kelly@gmail.com');
INSERT INTO public.customers VALUES (26, 'Janja', '00000000113', 'janja@gmail.com');
INSERT INTO public.customers VALUES (27, 'Bruna', '00000000213', 'bruna@gmail.com');
INSERT INTO public.customers VALUES (28, 'Brun0', '00000000214', 'brun0@gmail.com');
INSERT INTO public.customers VALUES (29, 'Sávio', '00000000215', 'savio@gmail.com');
INSERT INTO public.customers VALUES (34, 'Jader', '00000000216', 'jader@gmail.com');


--
-- Data for Name: enrollments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.enrollments VALUES (1, 2, 1);
INSERT INTO public.enrollments VALUES (5, 23, 8);
INSERT INTO public.enrollments VALUES (9, 26, 8);
INSERT INTO public.enrollments VALUES (10, 28, 8);
INSERT INTO public.enrollments VALUES (12, 9, 4);
INSERT INTO public.enrollments VALUES (17, 2, 9);
INSERT INTO public.enrollments VALUES (18, 2, 7);
INSERT INTO public.enrollments VALUES (20, 23, 7);
INSERT INTO public.enrollments VALUES (21, 24, 7);
INSERT INTO public.enrollments VALUES (23, 26, 7);
INSERT INTO public.enrollments VALUES (24, 27, 7);
INSERT INTO public.enrollments VALUES (26, 28, 7);
INSERT INTO public.enrollments VALUES (30, 9, 3);
INSERT INTO public.enrollments VALUES (33, 9, 6);
INSERT INTO public.enrollments VALUES (35, 2, 6);
INSERT INTO public.enrollments VALUES (37, 2, 5);
INSERT INTO public.enrollments VALUES (45, 28, 5);
INSERT INTO public.enrollments VALUES (46, 28, 6);
INSERT INTO public.enrollments VALUES (47, 29, 6);
INSERT INTO public.enrollments VALUES (52, 34, 6);
INSERT INTO public.enrollments VALUES (53, 34, 2);
INSERT INTO public.enrollments VALUES (55, 34, 7);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.courses_id_seq', 9, true);


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.customers_id_seq', 34, true);


--
-- Name: enrollments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.enrollments_id_seq', 55, true);


--
-- Name: courses courses_course_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_course_key UNIQUE (name);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: customers customers_cpf_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_cpf_key UNIQUE (cpf);


--
-- Name: customers customers_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: enrollments custumer_course_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT custumer_course_unique UNIQUE (customer_id, course_id);


--
-- Name: enrollments enrollments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_pkey PRIMARY KEY (id);


--
-- Name: enrollments course_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT course_fk FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- Name: enrollments customer_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT customer_fk FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- PostgreSQL database dump complete
--

