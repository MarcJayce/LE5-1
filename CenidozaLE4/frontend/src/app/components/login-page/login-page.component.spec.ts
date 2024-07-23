export class RegisterPageComponent implements OnInit {
    form: any = {
      username: null,
      password: null,
      firstName: null,
      lastName: null
    };
  
    constructor(private http: HttpClient, private router: Router) { }
  
    ngOnInit(): void { }
  
    onSubmit(): void {
      const { username, password, firstName, lastName } = this.form;
      console.log(this.form);
      this.http.post('https://localhost:7161/api/Login/register', this.form, { responseType: 'text' })
        .subscribe(data => {
          this.router.navigate(['/login']);
        });
    }
  }
  