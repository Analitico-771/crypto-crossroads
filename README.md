


<!-- Find and Replace All [repo_name] -->
<!-- Replace [product-screenshot] [product-url] -->
<!-- Other Badgets https://naereen.github.io/badges/ -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- [![License][license-shield]][license-url] -->


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#mvp-provide-the-following">M.V.P Provide the following:</a></li>
        <li><a href="#future-stretch-goals">Stretch Goals (Future)</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
	<!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This App fetches the transaction information of two crypto addresses from the blockchain, finds if the two addresses have exchanged transactions, and displays the results on the screen. The user will eventually be able to select from 3 choices: Transactions, ERC20, and ERC21.  CSS is not the focus of this project so I'm using the basic React CSS with minor modifications. It will initially focus on the Ethereum Chain.

### Built With

<!-- This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->

* [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
* [Reactjs](https://www.reactjs.org/)
* [React-Redux](https://react-redux.js.org/)
* [Etherscan API](https://docs.etherscan.io/)
* [JavaScript](https://www.javascript.com)
* [Nodejs](https://www.nodejs.org)
* [Ethers](https://docs.ethers.io/v5/) (for ethereum blockchain functions reference)
* [Solidity](https://docs.soliditylang.org/en/v0.8.11/) (for blockchain functions reference)

### MVP Provide the following:

* Securely connect to Etherscan API
* Maximize use of OOP for State management
* All API calls display the proper object layout

### Future Stretch Goals:

* Increase other blockchain choices
* Include more address fields
* Include analytics module

<!-- GETTING STARTED -->
## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally. -->
To get a local copy up and running follow these simple example steps.

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->
* Nodejs v16.13.1
* Yarn (more stable than npm)
* JavaScript
* Reactjs
* React-Redux

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AnaIitico/crypto-crossroads.git
   ```
2. Install node packages from package.json
   [read the docs here](https://classic.yarnpkg.com/en/docs/cli/)
   ```sh
   yarn install
   ```
3. Start the App
   ```sh
   yarn start
   ```

<!-- USAGE EXAMPLES -->
## Usage

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->
This App fetches the transaction information of two crypto addresses from the blockchain, finds if the two addresses have exchanged transactions, and displays the results on the screen.

You could write code that saves the transactions to csv to conduct further analysis, or you could include an analytical module and conduct the analytics inside the app. For example, you could determine if an NFT Contract is a potential "rug-pull" based on transactions between the top wallets, dev wallet, and the contract address itself.  You may also use it to assess risk of an asset or to determine the relationship between two or more addresses.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/AnaIitico/crypto-crossroads/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Run Yarn Install
3. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE` for more information.
 -->

<!-- CONTACT -->
## Contact

Jose Tollinchi - [@josetollinchi][linkedin-url] - jtollinchi1971@gmail.com

Project Link: [https://github.com/AnaIitico/crypto-crossroads](https://github.com/AnaIitico/crypto-crossroads)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AnaIitico/crypto-crossroads.svg?style=for-the-badge
[contributors-url]: https://github.com/AnaIitico/crypto-crossroads/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AnaIitico/crypto-crossroads.svg?style=for-the-badge
[forks-url]: https://github.com/AnaIitico/crypto-crossroads/network/members
[stars-shield]: https://img.shields.io/github/stars/AnaIitico/crypto-crossroads.svg?style=for-the-badge
[stars-url]: https://github.com/AnaIitico/crypto-crossroads/stargazers
[issues-shield]: https://img.shields.io/github/issues/AnaIitico/crypto-crossroads/network/members?style=for-the-badge
[issues-url]: https://github.com/AnaIitico/crypto-crossroads/issues
<!-- [license-shield]: 
[license-url]:  -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/josetollinchi/