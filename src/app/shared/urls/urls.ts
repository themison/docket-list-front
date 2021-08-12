export class URLS {
  public static projects = {
    getProjects: 'api/project/get-by-user',
    createProject: 'api/project/create-project/',
  };

  public static tasks = {
    getTasks: (id: number) => `api/task/by-folder-id/${id}`,
  };

  public static auth = {
    login: 'api/account/login/',
  };
}
