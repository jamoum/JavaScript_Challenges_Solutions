const Go = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(Go(1)).toEqual('-');
        expect(Go(2)).toEqual('--');
        expect(Go(3)).toEqual('---');
        expect(Go(4)).toEqual('----');
        expect(Go(5)).toEqual('-----');
        expect(Go(6)).toEqual('------');
        expect(Go(7)).toEqual('-------');
        expect(Go(8)).toEqual('--------');
        expect(Go(9)).toEqual('---------');
        expect(Go(10)).toEqual('----------');
        expect(Go(11)).toEqual('-----------');
        expect(Go(12)).toEqual('------------');
        expect(Go(13)).toEqual('-------------');
        expect(Go(14)).toEqual('--------------');
        expect(Go(15)).toEqual('---------------');
        expect(Go(16)).toEqual('----------------');
        expect(Go(17)).toEqual('-----------------');
        expect(Go(18)).toEqual('------------------');
        expect(Go(19)).toEqual('-------------------');
        expect(Go(20)).toEqual('--------------------');
        expect(Go(21)).toEqual('---------------------');
        expect(Go(22)).toEqual('----------------------');
        expect(Go(23)).toEqual('-----------------------');
        expect(Go(24)).toEqual('------------------------');
        expect(Go(25)).toEqual('-------------------------');
        expect(Go(26)).toEqual('--------------------------');
        expect(Go(27)).toEqual('---------------------------');
        expect(Go(28)).toEqual('----------------------------');
        expect(Go(29)).toEqual('-----------------------------');
        expect(Go(30)).toEqual('------------------------------');
        expect(Go(31)).toEqual('-------------------------------');
        expect(Go(32)).toEqual('--------------------------------');
        expect(Go(33)).toEqual('---------------------------------');
        expect(Go(34)).toEqual('----------------------------------');
        expect(Go(35)).toEqual('-----------------------------------');
        expect(Go(36)).toEqual('------------------------------------');
        expect(Go(37)).toEqual('-------------------------------------');
        expect(Go(38)).toEqual('--------------------------------------');
        expect(Go(39)).toEqual('---------------------------------------');
        expect(Go(40)).toEqual('----------------------------------------');
        expect(Go(41)).toEqual('-----------------------------------------');
        expect(Go(42)).toEqual('------------------------------------------');
        expect(Go(43)).toEqual('-------------------------------------------');
        expect(Go(44)).toEqual('--------------------------------------------');
        expect(Go(45)).toEqual('---------------------------------------------');
        expect(Go(46)).toEqual('----------------------------------------------');
        expect(Go(47)).toEqual('-----------------------------------------------');
        expect(Go(48)).toEqual('------------------------------------------------');
        expect(Go(49)).toEqual('-------------------------------------------------');
        expect(Go(50)).toEqual('--------------------------------------------------');
        expect(Go(51)).toEqual('---------------------------------------------------');
        expect(Go(52)).toEqual('----------------------------------------------------');
        expect(Go(53)).toEqual('-----------------------------------------------------');
        expect(Go(54)).toEqual('------------------------------------------------------');
        expect(Go(55)).toEqual('-------------------------------------------------------');
        expect(Go(56)).toEqual('--------------------------------------------------------');
        expect(Go(57)).toEqual('---------------------------------------------------------');
        expect(Go(58)).toEqual('----------------------------------------------------------');
        expect(Go(59)).toEqual('-----------------------------------------------------------');
        expect(Go(60)).toEqual('------------------------------------------------------------');
    });
});
