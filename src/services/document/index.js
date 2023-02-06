import client from "../../client";
export default {
  list: () => client.get("people"),
  detail: (id) => client.get(`people/${id}`),
};
