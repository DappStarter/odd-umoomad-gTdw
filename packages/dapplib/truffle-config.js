require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area turn street response remain clutch coral light army genius'; 
let testAccounts = [
"0xfb9410f106cc513e832895faa3c2411b3e79f767a7880488450c52d5e2bb4018",
"0x0f3a94571400432f3b5a6769afd48df3ad4e7d9563ff70185dee250d30ec6c6a",
"0x9bac26b9a0f7f7cfbefacd698ba7cd2f0ca1764802e802372198571fc3858290",
"0x8ab88b649d7502b4510f3608f3504469356f76af3a675d036d2274870280349c",
"0xc9317bba97633c7f2a6f62225cbd9a1d91d97dfff453d078aa05b7a66fec4300",
"0x60d0e49154937926390d5a6eccd32405a0740cedf83aecfde0cf258047da87da",
"0x9606bade22f1a4c18061f1d924f9615a0e278c6eb36df25aec7b83360721d149",
"0x62273191e41326e40e800e94edae76c03c128708fb1ca3c6382c4f71f394e470",
"0x349512a74444ededa4bdc93e8f78485d2aa799a77793de57654c4f2b69ec52fd",
"0xe56510a3b29af2d7a721c10ae284af68b2caf0ca85bb9cb768e3a6d280d82889"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

