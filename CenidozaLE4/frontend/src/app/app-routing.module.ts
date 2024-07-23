ngOnInit(): void {
    this.initData();
  }
  
  initData(): void {
    this.http.get<Post[]>('https://localhost:7161/api/post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      });
  }
  