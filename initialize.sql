create table avatar_table
(
    avatar_pk    serial not null
        constraint avatar_table_pk
            primary key,
    avatar_image bytea
);

alter table avatar_table
    owner to postgres;

create table player_table
(
    player_pk               serial  not null
        constraint player_table_pk
            primary key,
    player_email            varchar not null,
    player_score            integer,
    player_played_trainings varchar,
    player_username         varchar not null,
    player_avatar_fk        integer
        constraint player_avatar_fk
            references avatar_table
);

alter table player_table
    owner to postgres;

create table password_table
(
    password_player_fk integer not null
        constraint password_player_fk
            references player_table,
    password_value     varchar not null,
    password_pk        serial  not null
        constraint password_table_pk
            primary key
);

alter table password_table
    owner to postgres;

create unique index password_table_password_pk_uindex
    on password_table (password_pk);

create unique index player_table_player_email_uindex
    on player_table (player_email);

create unique index player_table_player_pk_uindex
    on player_table (player_pk);

create unique index player_table_player_username_uindex
    on player_table (player_username);

create unique index avatar_table_avatar_pk_uindex
    on avatar_table (avatar_pk);

create table training_table
(
    training_pk       serial  not null
        constraint training_table_pk
            primary key,
    training_category varchar not null,
    training_topic    varchar not null,
    training_question varchar not null,
    training_answer   varchar not null,
    training_text     varchar not null,
    training_reward   varchar not null
);

alter table training_table
    owner to postgres;

create unique index training_table_training_pk_uindex
    on training_table (training_pk);

create table action_table
(
    action_value integer not null,
    action_role  varchar,
    action_text  varchar,
    action_icon  bytea,
    action_pk    serial  not null
        constraint action_table_pk
            primary key
);

alter table action_table
    owner to postgres;

create unique index action_table_action_pk_uindex
    on action_table (action_pk);

create table session_table
(
    session_score integer,
    session_role  varchar,
    session_pk    serial not null
        constraint session_table_pk
            primary key
);

alter table session_table
    owner to postgres;

create unique index session_table_session_pk_uindex
    on session_table (session_pk);

