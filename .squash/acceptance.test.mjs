import { test } from "node:test";
import assert from "node:assert/strict";
import { parseScopes } from "./scopes.mjs";
test("space-separated scopes", () => assert.deepEqual(parseScopes("READ_BOOKING READ_PROFILE"), ["READ_BOOKING", "READ_PROFILE"]));
test("comma-separated still works", () => assert.deepEqual(parseScopes("READ_BOOKING,READ_PROFILE"), ["READ_BOOKING", "READ_PROFILE"]));
test("single scope", () => assert.deepEqual(parseScopes("READ_BOOKING"), ["READ_BOOKING"]));
