export class AuthServiceService {
    isLoggedIn: boolean = false;
    public redirectUrl: string = '';
  
    constructor(private http: HttpClient) { }
  
    login(username: string, password: string) {
      return this.http.post<string>('https://localhost:7161/api/login/login', { username, password });
    }
  }
  