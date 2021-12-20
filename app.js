const workWithData = {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    users: 'https://jsonplaceholder.typicode.com/users',
    async getArr() {
        const posts = await this.getDate(this.posts);
        const users = await this.getDate(this.users);
        this.sortArr(posts,users);
        posts.forEach(item => {
            this.createNewPost(item);
        });
    },
    async getDate (url) {
        const respons = await fetch(url);
        return await respons.json();
    },
    sortArr(posts,users) {
        users.forEach(item => {
            this.createNewArr(posts,item);
        });
    },
    createNewArr(arr,item) {
        arr.forEach(user => {
            if(user.userId === item.id) {
                user.name = item.name;
                user.userName = item.username;
            };
        });
    },
    createNewPost({name,title,body}) {
        const initialsName = this.renderName(name);
        const parent = document.querySelector('.container');
        const wraper = document.createElement('div');
        wraper.classList.add('content');
        wraper.innerHTML = `
        <div class="wrapper_user">
            <div class="user_name">${initialsName}</div>
        </div>
        <div class="wrapper_text">
            <div class="title">${title}</div>
            <div class="body">${body}</div>
        </div>
        `;
        parent.append(wraper);

    },
    renderName(str) {
        let names = str.split('');
        let initials = names[0].slice(0, 1).toUpperCase();
        if (names.length > 1) initials += names[names.length - 1].slice(0, 1).toUpperCase();
        return initials;
    },  
};
workWithData.getArr();



console.log('сделал изменение в develop и сделал push без merge')
console.log('сделал изменение в develop и сделал push без merge')
console.log('da')




console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')
console.log('tape')






