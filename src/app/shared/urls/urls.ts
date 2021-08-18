export class URLS {
  public static projects = {
    getProjects: 'api/project/get-by-user',
    createProject: 'api/project/create-project/',
    baseProject: (id: number) => `api/project/${id}`,
  };

  public static tasks = {
    getTasks: (id: number) => `api/task/by-folder-id/${id}`,
    baseTask: (id: number) => `api/task/${id}`,
    createTask: 'api/task/create-task',
  };

  public static auth = {
    login: 'api/account/login/',
    register: 'api/account/register/',
  };
}
