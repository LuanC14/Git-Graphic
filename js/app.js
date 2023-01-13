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
        this.userData = await GithubUsers.search(username)

        if (this.userData.login === undefined || null) {
            return alert("Usuário não encontrado")
        }

        this.users = [...this.users, this.userData]
        this.updateRoot()
        this.save()
    }

    onAdd() {
        const addButton = this.root.querySelector('.add-user .add-button')

        addButton.onclick = () => {

            if (this.users.length >= 10) {
                return alert("Apenas 10 usuários permitidos")
            }

            const user = prompt("Digite o username do Github")
            this.add(user)
        }
    }

    delete(user) {
        const filteredUser = this.users
            .filter(entry => entry.name != user.name)
        this.users = filteredUser
        this.update()
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

