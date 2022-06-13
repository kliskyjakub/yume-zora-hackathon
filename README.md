# yume.first

we all gucci with yume.first

## Installation

Use the package manager npm to install necessary packages.

```bash
npm install
```

## Hardhat tests

### Run

```bash
npx hardhat test
```

### Checklist

---basic---

- [ ] should return metadata uri of the token
- [ ] should return image uri of the token

---project team functions---

- [x] should setBaseURI
- [x] should switch status to 0, 1, 2
- [x] should resume from finished status
- [x] should revert when non_owner uses setStatus
- [x] should withdraw balance
- [x] should revert when non_owner uses withdraw

---reserve---

- [x] should reserve some tokens for a team
- [x] should revert if (not owner) tries to reserve
- [x] should increase the total supply when tokens are reserrved

---allowlist sale---

- [x] should revert when allowlist sale is not active
- [x] should revert when the user is not in allowlist
- [x] should revert when the allowlisted user to to mint more than 2 nfts
- [x] should allow the allowlisted user to mint 2 nfts
- [x] should revert when the max supply exceeded
- [x] ~~should revert when user pays less eths (free mint now)~~
- [x] should increase the total supply when tokens are minted
- [x] should refund if the user payed more

---public sale---

- [x] should revert when public sale is not active
- [x] should revert when the user mints more than 2 nfts
- [x] should allow the public user to mint 2 nfts
- [x] should allow the allowlisted user to to mint 2 nfts
- [x] should revert when the max supply exceeded
- [x] ~~should revert when user pays less eths (free mint now)~~
- [x] should increase the total supply when tokens are minted
- [x] should refund if the user payed more

---extra security---

[Source](https://consensys.github.io/smart-contract-best-practices/attacks/)

- [x] should protect against reentrancy attacks
- [x] change (transfer) to (call) for future gas changes
- [x] check underflow / overflow : all the numbers used in the contract is low enough
- [x] check DoS attacks
- [x] run slither to check vulnerabilities
