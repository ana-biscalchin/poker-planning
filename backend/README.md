# Poker Planning Backend

This folder contains SQL scripts for the Supabase PostgreSQL database.

To apply the schema locally, run:

```bash
psql < schema.sql
```

The schema defines three tables:

- `rooms` – a room for each planning session
- `planning_tables` – a planning board within a room
- `votes` – individual votes cast by players

Supabase Realtime can be configured to listen to changes on these tables.
