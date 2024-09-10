"use strict";
/**
 *  The Application Binary Interface (ABI) describes how method input
 *  parameters should be encoded, their results decoded, and how to
 *  decode events and errors.
 *
 *  See [About ABIs](docs-abi) for more details how they are used.
 *
 *  @_section api/abi:Application Binary Interface  [about-abi]
 *  @_navTitle: ABI
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbiWordAccumulator = exports.AbiCodersTreeNode = exports.TupleCoder = exports.StringCoder = exports.NumberCoder = exports.NullCoder = exports.FixedBytesCoder = exports.BytesCoder = exports.BooleanCoder = exports.ArrayCoder = exports.AnonymousCoder = exports.AddressCoder = exports.Coder = exports.Typed = exports.Result = exports.TransactionDescription = exports.LogDescription = exports.ErrorDescription = exports.Interface = exports.Indexed = exports.checkResultErrors = exports.StructFragment = exports.ParamType = exports.NamedFragment = exports.FunctionFragment = exports.Fragment = exports.FallbackFragment = exports.EventFragment = exports.ErrorFragment = exports.ConstructorFragment = exports.encodeBytes32String = exports.decodeBytes32String = exports.AbiCoder = void 0;
//////
var abi_coder_js_1 = require("./abi-coder.js");
Object.defineProperty(exports, "AbiCoder", { enumerable: true, get: function () { return abi_coder_js_1.AbiCoder; } });
var bytes32_js_1 = require("./bytes32.js");
Object.defineProperty(exports, "decodeBytes32String", { enumerable: true, get: function () { return bytes32_js_1.decodeBytes32String; } });
Object.defineProperty(exports, "encodeBytes32String", { enumerable: true, get: function () { return bytes32_js_1.encodeBytes32String; } });
var fragments_js_1 = require("./fragments.js");
Object.defineProperty(exports, "ConstructorFragment", { enumerable: true, get: function () { return fragments_js_1.ConstructorFragment; } });
Object.defineProperty(exports, "ErrorFragment", { enumerable: true, get: function () { return fragments_js_1.ErrorFragment; } });
Object.defineProperty(exports, "EventFragment", { enumerable: true, get: function () { return fragments_js_1.EventFragment; } });
Object.defineProperty(exports, "FallbackFragment", { enumerable: true, get: function () { return fragments_js_1.FallbackFragment; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return fragments_js_1.Fragment; } });
Object.defineProperty(exports, "FunctionFragment", { enumerable: true, get: function () { return fragments_js_1.FunctionFragment; } });
Object.defineProperty(exports, "NamedFragment", { enumerable: true, get: function () { return fragments_js_1.NamedFragment; } });
Object.defineProperty(exports, "ParamType", { enumerable: true, get: function () { return fragments_js_1.ParamType; } });
Object.defineProperty(exports, "StructFragment", { enumerable: true, get: function () { return fragments_js_1.StructFragment; } });
var interface_js_1 = require("./interface.js");
Object.defineProperty(exports, "checkResultErrors", { enumerable: true, get: function () { return interface_js_1.checkResultErrors; } });
Object.defineProperty(exports, "Indexed", { enumerable: true, get: function () { return interface_js_1.Indexed; } });
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return interface_js_1.Interface; } });
Object.defineProperty(exports, "ErrorDescription", { enumerable: true, get: function () { return interface_js_1.ErrorDescription; } });
Object.defineProperty(exports, "LogDescription", { enumerable: true, get: function () { return interface_js_1.LogDescription; } });
Object.defineProperty(exports, "TransactionDescription", { enumerable: true, get: function () { return interface_js_1.TransactionDescription; } });
Object.defineProperty(exports, "Result", { enumerable: true, get: function () { return interface_js_1.Result; } });
var typed_js_1 = require("./typed.js");
Object.defineProperty(exports, "Typed", { enumerable: true, get: function () { return typed_js_1.Typed; } });
var index_js_1 = require("./coders/index.js");
Object.defineProperty(exports, "Coder", { enumerable: true, get: function () { return index_js_1.Coder; } });
Object.defineProperty(exports, "AddressCoder", { enumerable: true, get: function () { return index_js_1.AddressCoder; } });
Object.defineProperty(exports, "AnonymousCoder", { enumerable: true, get: function () { return index_js_1.AnonymousCoder; } });
Object.defineProperty(exports, "ArrayCoder", { enumerable: true, get: function () { return index_js_1.ArrayCoder; } });
Object.defineProperty(exports, "BooleanCoder", { enumerable: true, get: function () { return index_js_1.BooleanCoder; } });
Object.defineProperty(exports, "BytesCoder", { enumerable: true, get: function () { return index_js_1.BytesCoder; } });
Object.defineProperty(exports, "FixedBytesCoder", { enumerable: true, get: function () { return index_js_1.FixedBytesCoder; } });
Object.defineProperty(exports, "NullCoder", { enumerable: true, get: function () { return index_js_1.NullCoder; } });
Object.defineProperty(exports, "NumberCoder", { enumerable: true, get: function () { return index_js_1.NumberCoder; } });
Object.defineProperty(exports, "StringCoder", { enumerable: true, get: function () { return index_js_1.StringCoder; } });
Object.defineProperty(exports, "TupleCoder", { enumerable: true, get: function () { return index_js_1.TupleCoder; } });
var abi_accumulator_js_1 = require("./abi-accumulator.js");
Object.defineProperty(exports, "AbiCodersTreeNode", { enumerable: true, get: function () { return abi_accumulator_js_1.AbiCodersTreeNode; } });
Object.defineProperty(exports, "AbiWordAccumulator", { enumerable: true, get: function () { return abi_accumulator_js_1.AbiWordAccumulator; } });
//# sourceMappingURL=index.js.map