import { GithubUsers } from "./data_api.js";
import { handleHeightBars } from "./handle_bars.js";

class dataUser {
    constructor(element) {
        this.root = document.querySelector(element)
        this.onAdd()
        this.load()
    }

    load() {
        this.users = JSON.parse(localStorage.getItem('@Graphic-Github:')) || []
    }

    save() {
        localStorage.setItem("@Graphic-Github:", JSON.stringify(this.users))
    }

    async add(username) {
        try{
            const newUser = await GithubUsers.search(username)
            const userExists = this.users.find(user => user.login == newUser.login )

            if (newUser.login === undefined || null) {
                throw new Error("Usuário não encontrado")
            }
            if(userExists) {
                throw new Error("O usuário já está presente na lista")
            }
    
            this.users = [...this.users, newUser]
            this.updateRoot()
            this.save()
        }
        catch(error){
            alert(error.message)
        }
    }

    onAdd() {
        const addButton = this.root.querySelector('.add-user .add-button')
        addButton.onclick = () => {

            if (this.users.length >= 10) {
                return alert("Apenas 10 usuários permitidos")
            }
            const user = prompt("Digite o username do Github")
            if(user == null || undefined) return
            this.add(user)
        }
    }

    delete(user) {
        const filteredUser = this.users
            .filter(entry => entry.login != user.login)
        this.users = filteredUser
        this.updateRoot()
        this.save()
    }
}

export class appUpdate extends dataUser {
    constructor(element) {
        super(element)
        this.updateRoot()
    }

    updateRoot() {
        this.removeAllUl()
        this.users.forEach((user) => {
            const bars = this.addBars()
            const profile = this.addProfile()
            const barsGraphic = this.root.querySelector('.bars')
            const profilesList = this.root.querySelector('.scale-x')

            profile.querySelector('li img').src = `https://github.com/${user.login}.png`
            profile.querySelector('li p').textContent = user.login
            profile.querySelector('.delete-button').onclick = () => {
                this.delete(user)
            }

            handleHeightBars.handleBarRepo(user.public_repos, bars)
            handleHeightBars.handleBarFollow(user.followers, bars)
            barsGraphic.append(bars)
            profilesList.append(profile)
        })
    }

    addBars() {
        const ulBar = document.createElement('ul')
        ulBar.innerHTML = `
        <ul class="data-list">
        <li class="repo-bar"></li>
        <li class="follower-bar"></li>
        </ul>`

        return ulBar
    }

    addProfile() {
        const ulUser = document.createElement('ul')
        ulUser.innerHTML = `
        <ul class="profile-list">
                <li>
                <div class="description">
                <span>Repo</span>
                <span>Followers</span>
                </div>
                    <button class="delete-button">❌</button>
                    <img src="https://github.com/igorttosta.png" alt="">
                    <p>Igorttosta</p>
                </li>
        </ul>`

        return ulUser
    }

    removeAllUl() {
        const ulNodeBars = this.root.querySelectorAll('.bars ul')
        const ulNodeProfile = this.root.querySelectorAll('.scale-x ul')
        ulNodeBars.forEach((ul) => {
            ul.remove()
        })
        
        ulNodeProfile.forEach((ul) => {
            ul.remove()
        })
    }
}

