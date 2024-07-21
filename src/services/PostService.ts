import IPost from "src/interfaces/IPost";
import { Ref, ref } from "vue";
class PostService{

  private posts: Ref<Array<IPost>>;

  constructor(){
    this.posts = ref<Array<IPost>>([]);
  }

  getPosts(): Ref<Array<IPost>>{
    return this.posts;
  }

  //user
  async fetchAll(): Promise<void>{
    try{
      const url = "http://localhost:5000/procceding";
      const response = await fetch(url);
      const json = await response.json();
      this.posts.value = await json;
    }
    catch(error){
      console.log(error);
    }
  }

  //agregar usuario
  async create(profile: { name: any; email: any; password: any; role: any; }){
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('password', profile.password);
    formData.append('role', profile.role);

    try{
      const url = "http://localhost:5000/user";
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
      const json = await response.json();
      this.posts.value = await json;
    }
    catch(error){
      console.log(error);
    }
  }

  //modificar usuario
  async update(){

  }
  //eliminar usuario
  async delete(){

  }
}

export default PostService;
