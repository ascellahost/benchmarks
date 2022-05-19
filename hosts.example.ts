
const upload_systems_key = ""
// Why do these nerds use uuids???
const tixte_key = ""
const tixte_domain = ""
const ascella_key = ""
const ez_key = ""

export const hosts = {
    "upload-systems": {
        url: "https://api.upload.systems/images/upload",
        form_name: "file",
        file_name: "image.png",
        form: {
            "key": upload_systems_key,
        },
        headers: {},
    },
    "tixte": {
        url: "https://api.tixte.com/v1/upload",
        form_name: "file",
        file_name: undefined,
        form: {
            "payload_json":
                '{"type":1,"name":"teqcyxcn1hboqpuwifcq.png"}',
        },
        headers: {
            "name": "teqcyxcn1hboqpuwifcq.png",
            "domain": tixte_domain,
            "authorization": tixte_key,
        },
    },
    "ascella": {
        url: "https://ascella.wtf/v2/ascella/upload",
        file_name: undefined,
        form_name: "image",
        form: {},
        headers: {
            "authorization": ascella_key,
        },
    },
    "e-z": {
        url: "https://api.e-z.host/files",
        form_name: "file",
        file_name: undefined,
        form: {},
        headers: {
            "key": ez_key,
        },
    },
};
