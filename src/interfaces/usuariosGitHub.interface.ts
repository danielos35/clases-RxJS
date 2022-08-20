import { UsuarioGitHub } from "./usuarioGitHub.interface";

export interface UsuariosGitHub {
  total_count: number;
  incomplete_results: boolean;
  items: UsuarioGitHub[];
}
