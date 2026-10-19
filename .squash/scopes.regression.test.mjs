import { test } from "node:test";
import assert from "node:assert/strict";
import { parseScopes } from "./scopes.mjs";

test("repeated and surrounding whitespace are delimiters", () => {
  assert.deepEqual(parseScopes("  READ_BOOKING   READ_PROFILE\tEMAIL_READ\nCALENDAR_READ  "), [
    "READ_BOOKING",
    "READ_PROFILE",
    "EMAIL_READ",
    "CALENDAR_READ",
  ]);
});

test("commas and whitespace can be mixed without empty tokens", () => {
  assert.deepEqual(parseScopes("READ_BOOKING, READ_PROFILE,,EMAIL_READ  CALENDAR_READ"), [
    "READ_BOOKING",
    "READ_PROFILE",
    "EMAIL_READ",
    "CALENDAR_READ",
  ]);
});

test("empty and whitespace-only inputs return no scopes", () => {
  assert.deepEqual(parseScopes(""), []);
  assert.deepEqual(parseScopes(" \t\n "), []);
});
