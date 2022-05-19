import { hosts } from "./hosts.ts";

for (const [name, data] of Object.entries(hosts)) {
  const file = await Deno.readFile("image.png");
  Deno.bench({
    name: `Test ${name}`,
    warmup: 0,
    n: 1,
    async fn() {
      const form = new FormData();
      form.append(data.form_name, new Blob([file]), data.file_name);
      for (const [k, v] of Object.entries(data.form)) {
        //@ts-ignore -
        form.append(k, v);
      }
      const res = await fetch(data.url, {
        headers: {
          "Accept": "application/json",
          "User-Agent": "ShareX/13.4.0",
          ...data.headers,
        },
        method: "POST",
        body: form,
      });
      if (!res.ok) throw new Error(`Not ok! ${await res.text()}`);
      // console.log(await res.text())
    },
  });
}
