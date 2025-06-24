# Poker Planning Backend

This folder contains SQL scripts for the Supabase PostgreSQL database.

To apply the schema locally, run:

```bash
psql < schema.sql
```

The schema defines three tables:

- `rooms` &ndash; a room for each planning session
- `table` &ndash; a planning board within a room
- `votes` &ndash; individual votes cast by players

Supabase Realtime can be configured to listen to changes on these tables.
