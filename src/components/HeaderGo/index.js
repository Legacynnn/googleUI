import React from 'react'
import { Header, HeaderR, HeaderL, Avatar, Links } from './style'

function HeaderGo() {
    return(
        <Header>
            <HeaderL>
                <img src="https://raw.githubusercontent.com/rocketseat-content/youtube-clone-google-homepage/9d8028046acc6e57196bdd514e0c8a9d54141d72/assets/burger-icon.svg" alt="Menu Burger" />
                
                    <a className="All">All</a>
                    <a className="Images" activeClassName="Images-active">Images</a>
            
            </HeaderL>
            <HeaderR>
                <img src="https://raw.githubusercontent.com/rocketseat-content/youtube-clone-google-homepage/9d8028046acc6e57196bdd514e0c8a9d54141d72/assets/more-icon.svg" alt="More icons" />
                <Avatar>
                    <img src="https://avatars.dicebear.com/api/male/cool%20avatar.svg?w=40&h=40&mood[]=surprised" alt="Avatar Image" />
                    <img src="https://raw.githubusercontent.com/rocketseat-content/youtube-clone-google-homepage/9d8028046acc6e57196bdd514e0c8a9d54141d72/assets/circle-frame.svg" alt="Avatar Frame" ></img>
                </Avatar>
            </HeaderR>
        </Header>
    )

}

export default HeaderGo