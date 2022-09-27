import http from "../http-common";

class BlogDataService {
    getAll() {
        return http.get("/blogList");
      }
      get(id) {
        return http.get(`/blogList/${id}`);
      }
    
      create(data) {
        return http.post("/blogList", data);
      }
    
      update(id, data) {
        return http.put(`/blogList/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/blogList/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/blogList`);
      }
    
      findByTitle(title) {
        return http.get(`/blogList?title=${title}`);
      }
}
export default new BlogDataService();
