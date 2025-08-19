import {useQuery, useMutation} from "@tanstack/react-query"
import { CreateUsuario, DeleteUsuario, GetUsuarios, UpdateUsuario} from "../Services/endpoints"
import api from "../Services/api";

export function useCreateUsuario({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: CreateUsuario, onSuccess, onError});
} 

export function useGetUsuarios({onSuccess = () => {}, onError = () => {}, } = {}) {
    return useQuery({
    queryKey:["usuarios"],
    queryFn: GetUsuarios,
    onSuccess, 
    onError});
} 


export function useUpdateUsuario({
   onSuccess = () => {}, 
      onError = () => {},
       } = {})
  {return useMutation({mutationFn: UpdateUsuario, onSuccess, onError});
  } 


export function useDeleteUsuario({
    onSuccess = () => {}, 
    onError = () => {},
     } = {})
{return useMutation({mutationFn: DeleteUsuario, onSuccess, onError});
} 

//sessao
