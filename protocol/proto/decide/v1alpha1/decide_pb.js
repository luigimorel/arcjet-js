// @generated by protoc-gen-es v1.10.0
// @generated from file proto/decide/v1alpha1/decide.proto (package proto.decide.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Represents whether we think the client is a bot or not. This should be used
 * alongside the bot score which represents the level of certainty of our
 * detection.
 *
 * @generated from enum proto.decide.v1alpha1.BotType
 */
export const BotType = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.BotType",
  [
    {no: 0, name: "BOT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "BOT_TYPE_NOT_ANALYZED", localName: "NOT_ANALYZED"},
    {no: 2, name: "BOT_TYPE_AUTOMATED", localName: "AUTOMATED"},
    {no: 3, name: "BOT_TYPE_LIKELY_AUTOMATED", localName: "LIKELY_AUTOMATED"},
    {no: 4, name: "BOT_TYPE_LIKELY_NOT_A_BOT", localName: "LIKELY_NOT_A_BOT"},
    {no: 5, name: "BOT_TYPE_VERIFIED_BOT", localName: "VERIFIED_BOT"},
  ],
);

/**
 * Represents the type of email address submitted.
 *
 * @generated from enum proto.decide.v1alpha1.EmailType
 */
export const EmailType = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.EmailType",
  [
    {no: 0, name: "EMAIL_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "EMAIL_TYPE_DISPOSABLE", localName: "DISPOSABLE"},
    {no: 2, name: "EMAIL_TYPE_FREE", localName: "FREE"},
    {no: 3, name: "EMAIL_TYPE_NO_MX_RECORDS", localName: "NO_MX_RECORDS"},
    {no: 4, name: "EMAIL_TYPE_NO_GRAVATAR", localName: "NO_GRAVATAR"},
    {no: 5, name: "EMAIL_TYPE_INVALID", localName: "INVALID"},
  ],
);

/**
 * The mode to run in. This can be either `DRY_RUN` or `LIVE`. In `DRY_RUN`
 * mode, all requests will be allowed and you can review what the action would
 * have been from your dashboard. In `LIVE` mode, requests will be allowed,
 * challenged or blocked based on the returned decision.
 *
 * @generated from enum proto.decide.v1alpha1.Mode
 */
export const Mode = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.Mode",
  [
    {no: 0, name: "MODE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MODE_DRY_RUN", localName: "DRY_RUN"},
    {no: 2, name: "MODE_LIVE", localName: "LIVE"},
  ],
);

/**
 * @generated from enum proto.decide.v1alpha1.RuleState
 */
export const RuleState = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.RuleState",
  [
    {no: 0, name: "RULE_STATE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "RULE_STATE_RUN", localName: "RUN"},
    {no: 2, name: "RULE_STATE_NOT_RUN", localName: "NOT_RUN"},
    {no: 3, name: "RULE_STATE_DRY_RUN", localName: "DRY_RUN"},
    {no: 4, name: "RULE_STATE_CACHED", localName: "CACHED"},
  ],
);

/**
 * The conclusion for the request based on the Arcjet analysis and any specific
 * configuration.
 *
 * @generated from enum proto.decide.v1alpha1.Conclusion
 */
export const Conclusion = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.Conclusion",
  [
    {no: 0, name: "CONCLUSION_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CONCLUSION_ALLOW", localName: "ALLOW"},
    {no: 2, name: "CONCLUSION_DENY", localName: "DENY"},
    {no: 3, name: "CONCLUSION_CHALLENGE", localName: "CHALLENGE"},
    {no: 4, name: "CONCLUSION_ERROR", localName: "ERROR"},
  ],
);

/**
 * The SDK used to make the request. Used for analytics and to help us improve.
 *
 * @generated from enum proto.decide.v1alpha1.SDKStack
 */
export const SDKStack = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.SDKStack",
  [
    {no: 0, name: "SDK_STACK_UNSPECIFIED"},
    {no: 1, name: "SDK_STACK_NODEJS"},
    {no: 2, name: "SDK_STACK_NEXTJS"},
    {no: 3, name: "SDK_STACK_PYTHON"},
    {no: 4, name: "SDK_STACK_DJANGO"},
    {no: 5, name: "SDK_STACK_BUN"},
    {no: 6, name: "SDK_STACK_DENO"},
    {no: 7, name: "SDK_STACK_SVELTEKIT"},
    {no: 8, name: "SDK_STACK_HONO"},
    {no: 9, name: "SDK_STACK_NUXT"},
    {no: 10, name: "SDK_STACK_NESTJS"},
  ],
);

/**
 * @generated from enum proto.decide.v1alpha1.RateLimitAlgorithm
 */
export const RateLimitAlgorithm = /*@__PURE__*/ proto3.makeEnum(
  "proto.decide.v1alpha1.RateLimitAlgorithm",
  [
    {no: 0, name: "RATE_LIMIT_ALGORITHM_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "RATE_LIMIT_ALGORITHM_TOKEN_BUCKET", localName: "TOKEN_BUCKET"},
    {no: 2, name: "RATE_LIMIT_ALGORITHM_FIXED_WINDOW", localName: "FIXED_WINDOW"},
    {no: 3, name: "RATE_LIMIT_ALGORITHM_SLIDING_WINDOW", localName: "SLIDING_WINDOW"},
  ],
);

/**
 * Additional information from Arcjet about the IP address associated with a
 * request.
 *
 * @generated from message proto.decide.v1alpha1.IpDetails
 */
export const IpDetails = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.IpDetails",
  () => [
    { no: 1, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "accuracy_radius", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "timezone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "postal_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "country_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "continent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "continent_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "asn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "asn_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "asn_domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "asn_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "asn_country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "is_hosting", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "is_vpn", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "is_proxy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "is_tor", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 22, name: "is_relay", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * The reason for the decision. This is populated based on the selected rules
 * for deny or challenge responses. Additional details can be found in the field
 * and by logging into the Arcjet dashboard and searching for the decision ID.
 *
 * @generated from message proto.decide.v1alpha1.Reason
 */
export const Reason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.Reason",
  () => [
    { no: 1, name: "rate_limit", kind: "message", T: RateLimitReason, oneof: "reason" },
    { no: 2, name: "edge_rule", kind: "message", T: EdgeRuleReason, oneof: "reason" },
    { no: 3, name: "bot", kind: "message", T: BotReason, oneof: "reason" },
    { no: 4, name: "shield", kind: "message", T: ShieldReason, oneof: "reason" },
    { no: 5, name: "email", kind: "message", T: EmailReason, oneof: "reason" },
    { no: 6, name: "error", kind: "message", T: ErrorReason, oneof: "reason" },
    { no: 7, name: "sensitive_info", kind: "message", T: SensitiveInfoReason, oneof: "reason" },
  ],
);

/**
 * Details of a rate limit decision.
 *
 * @generated from message proto.decide.v1alpha1.RateLimitReason
 */
export const RateLimitReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.RateLimitReason",
  () => [
    { no: 1, name: "max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "remaining", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "reset_time", kind: "message", T: Timestamp },
    { no: 5, name: "reset_in_seconds", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "window_in_seconds", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * Details of an edge rule decision. Unimplemented.
 *
 * @generated from message proto.decide.v1alpha1.EdgeRuleReason
 */
export const EdgeRuleReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.EdgeRuleReason",
  [],
);

/**
 * Details of a bot decision.
 *
 * @generated from message proto.decide.v1alpha1.BotReason
 */
export const BotReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.BotReason",
  () => [
    { no: 1, name: "bot_type", kind: "enum", T: proto3.getEnumType(BotType) },
    { no: 2, name: "bot_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "user_agent_match", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "ip_hosting", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "ip_vpn", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "ip_proxy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "ip_tor", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "ip_relay", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Details of an Arcjet Shield decision.
 *
 * @generated from message proto.decide.v1alpha1.ShieldReason
 */
export const ShieldReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.ShieldReason",
  () => [
    { no: 1, name: "shield_triggered", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "suspicious", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Details of an email decision.
 *
 * @generated from message proto.decide.v1alpha1.EmailReason
 */
export const EmailReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.EmailReason",
  () => [
    { no: 1, name: "email_types", kind: "enum", T: proto3.getEnumType(EmailType), repeated: true },
  ],
);

/**
 * Details of an error decision.
 *
 * @generated from message proto.decide.v1alpha1.ErrorReason
 */
export const ErrorReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.ErrorReason",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message proto.decide.v1alpha1.IdentifiedEntity
 */
export const IdentifiedEntity = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.IdentifiedEntity",
  () => [
    { no: 1, name: "identified_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "end", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * Details of a sensitive info reason.
 *
 * @generated from message proto.decide.v1alpha1.SensitiveInfoReason
 */
export const SensitiveInfoReason = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.SensitiveInfoReason",
  () => [
    { no: 1, name: "allowed", kind: "message", T: IdentifiedEntity, repeated: true },
    { no: 2, name: "denied", kind: "message", T: IdentifiedEntity, repeated: true },
  ],
);

/**
 * The configuration for a rate limit rule.
 *
 * @generated from message proto.decide.v1alpha1.RateLimitRule
 */
export const RateLimitRule = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.RateLimitRule",
  () => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(Mode) },
    { no: 2, name: "match", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "characteristics", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "window", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "timeout", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "algorithm", kind: "enum", T: proto3.getEnumType(RateLimitAlgorithm) },
    { no: 8, name: "refill_rate", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "interval", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "capacity", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 12, name: "window_in_seconds", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * The configuration for a bot rule.
 *
 * @generated from message proto.decide.v1alpha1.BotRule
 */
export const BotRule = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.BotRule",
  () => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(Mode) },
    { no: 2, name: "block", kind: "enum", T: proto3.getEnumType(BotType), repeated: true },
    { no: 3, name: "patterns", kind: "message", T: BotRule_Patterns },
  ],
);

/**
 * @generated from message proto.decide.v1alpha1.BotRule.Patterns
 */
export const BotRule_Patterns = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.BotRule.Patterns",
  () => [
    { no: 1, name: "add", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(BotType)} },
    { no: 2, name: "remove", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "BotRule_Patterns"},
);

/**
 * The configuration for an email rule.
 *
 * @generated from message proto.decide.v1alpha1.EmailRule
 */
export const EmailRule = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.EmailRule",
  () => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(Mode) },
    { no: 2, name: "block", kind: "enum", T: proto3.getEnumType(EmailType), repeated: true },
    { no: 3, name: "require_top_level_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "allow_domain_literal", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * The configuration for a detect sensitive info rule.
 *
 * @generated from message proto.decide.v1alpha1.SensitiveInfoRule
 */
export const SensitiveInfoRule = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.SensitiveInfoRule",
  () => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(Mode) },
    { no: 2, name: "allow", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "deny", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * The configuration for a shield rule.
 *
 * @generated from message proto.decide.v1alpha1.ShieldRule
 */
export const ShieldRule = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.ShieldRule",
  () => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(Mode) },
    { no: 2, name: "auto_added", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * The configuration for Arcjet.
 *
 * @generated from message proto.decide.v1alpha1.Rule
 */
export const Rule = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.Rule",
  () => [
    { no: 1, name: "rate_limit", kind: "message", T: RateLimitRule, oneof: "rule" },
    { no: 2, name: "bots", kind: "message", T: BotRule, oneof: "rule" },
    { no: 3, name: "email", kind: "message", T: EmailRule, oneof: "rule" },
    { no: 4, name: "shield", kind: "message", T: ShieldRule, oneof: "rule" },
    { no: 5, name: "sensitive_info", kind: "message", T: SensitiveInfoRule, oneof: "rule" },
  ],
);

/**
 * @generated from message proto.decide.v1alpha1.RuleResult
 */
export const RuleResult = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.RuleResult",
  () => [
    { no: 1, name: "rule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(RuleState) },
    { no: 3, name: "conclusion", kind: "enum", T: proto3.getEnumType(Conclusion) },
    { no: 4, name: "reason", kind: "message", T: Reason },
    { no: 5, name: "ttl", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * Details about a request under investigation.
 *
 * @generated from message proto.decide.v1alpha1.RequestDetails
 */
export const RequestDetails = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.RequestDetails",
  () => [
    { no: 1, name: "ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "protocol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "headers", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 7, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "extra", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 9, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "cookies", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * A decision made about the request under investigation.
 *
 * @generated from message proto.decide.v1alpha1.Decision
 */
export const Decision = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.Decision",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "conclusion", kind: "enum", T: proto3.getEnumType(Conclusion) },
    { no: 3, name: "reason", kind: "message", T: Reason },
    { no: 4, name: "rule_results", kind: "message", T: RuleResult, repeated: true },
    { no: 5, name: "ttl", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "ip_details", kind: "message", T: IpDetails },
  ],
);

/**
 * A request to the decide API.
 *
 * @generated from message proto.decide.v1alpha1.DecideRequest
 */
export const DecideRequest = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.DecideRequest",
  () => [
    { no: 1, name: "sdk_stack", kind: "enum", T: proto3.getEnumType(SDKStack) },
    { no: 2, name: "sdk_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "details", kind: "message", T: RequestDetails },
    { no: 5, name: "rules", kind: "message", T: Rule, repeated: true },
    { no: 6, name: "characteristics", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * A response from the decide API.
 *
 * @generated from message proto.decide.v1alpha1.DecideResponse
 */
export const DecideResponse = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.DecideResponse",
  () => [
    { no: 1, name: "decision", kind: "message", T: Decision },
    { no: 2, name: "extra", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * A request to the Report RPC when SDK has already made a decision locally.
 *
 * @generated from message proto.decide.v1alpha1.ReportRequest
 */
export const ReportRequest = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.ReportRequest",
  () => [
    { no: 1, name: "sdk_stack", kind: "enum", T: proto3.getEnumType(SDKStack) },
    { no: 2, name: "sdk_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "details", kind: "message", T: RequestDetails },
    { no: 5, name: "decision", kind: "message", T: Decision },
    { no: 6, name: "rules", kind: "message", T: Rule, repeated: true },
    { no: 7, name: "received_at", kind: "message", T: Timestamp },
    { no: 8, name: "characteristics", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * A response from the Report RPC.
 *
 * @generated from message proto.decide.v1alpha1.ReportResponse
 */
export const ReportResponse = /*@__PURE__*/ proto3.makeMessageType(
  "proto.decide.v1alpha1.ReportResponse",
  () => [
    { no: 1, name: "decision", kind: "message", T: Decision },
    { no: 2, name: "extra", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

