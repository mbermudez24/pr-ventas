PGDMP         &    	            {            ventas    15.2    15.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    17763    ventas    DATABASE     ?   CREATE DATABASE ventas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE ventas;
                postgres    false            ?            1259    17764    clientes    TABLE     ?   CREATE TABLE public.clientes (
    nombre character varying(50) NOT NULL,
    direccion character varying(50) NOT NULL,
    codpostal character varying(5),
    codpue character varying(5) NOT NULL,
    codcli integer NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            ?            1259    17774    clientes_codcli_seq    SEQUENCE     ?   CREATE SEQUENCE public.clientes_codcli_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.clientes_codcli_seq;
       public          postgres    false    214            ?           0    0    clientes_codcli_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.clientes_codcli_seq OWNED BY public.clientes.codcli;
          public          postgres    false    215            e           2604    17775    clientes codcli    DEFAULT     r   ALTER TABLE ONLY public.clientes ALTER COLUMN codcli SET DEFAULT nextval('public.clientes_codcli_seq'::regclass);
 >   ALTER TABLE public.clientes ALTER COLUMN codcli DROP DEFAULT;
       public          postgres    false    215    214            ?          0    17764    clientes 
   TABLE DATA           P   COPY public.clientes (nombre, direccion, codpostal, codpue, codcli) FROM stdin;
    public          postgres    false    214   b       ?           0    0    clientes_codcli_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.clientes_codcli_seq', 20, true);
          public          postgres    false    215            g           2606    17780 '   clientes PK_d42c4bae713155ee1e77d21871d 
   CONSTRAINT     k   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT "PK_d42c4bae713155ee1e77d21871d" PRIMARY KEY (codcli);
 S   ALTER TABLE ONLY public.clientes DROP CONSTRAINT "PK_d42c4bae713155ee1e77d21871d";
       public            postgres    false    214            ?   ?  x?eR?r?0?_q 1?pG)?q$???S?AH8?"= ???ii?c>9,?Q?w?{?{??&\?1vMn?? ?s?chz???>w??_?ҎcU??iV??1ʃPR+??>?‏~??? ???3?\
WJ??0???^/?>L)???u??PB[ܴ????B?q?9??? ?4?????Oq?1?ll?^?uJ?&????0? 7?+??m?n?SA?8/+?]z_:|L#?@b?s??&???9?N????>?gb?S??þ?K.???!???U@J?JCi9Y??R{W??????ʺ:SܵCK?M(@,?'?ކ.\٫t&?_?J?tk4??D??f?9h??g????al)Ç????6?D8??????eA)p??'??U'r!?WIZ?ױm覘?????(??C?(???ȯ-e)????B?;:????U?uL}?xEu#??0??*??Ԑu(?_(?7??}+c/BC??     