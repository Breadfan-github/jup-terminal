import create, { State } from "zustand";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

interface UserSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, _connection) => {
    let balance = 0;
    try {
      const connection = new Connection(
        "<RPC>"
      );
      balance = await connection.getBalance(publicKey);
      balance = balance / LAMPORTS_PER_SOL;
    } catch (e) {
      console.log(`error getting balance: `, e);
    }
    set((s) => {
      s.balance = balance;
      console.log(`balance updated, `, balance);
    });
  },
}));

export default useUserSOLBalanceStore;
