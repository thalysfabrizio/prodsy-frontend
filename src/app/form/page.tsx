// src/app/exemplo-form/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Componente Form do Shadcn UI
import { useCounterStore } from "@/stores/counterStore"; // Importando o store Zustand

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Usuário precisa ter pelo menos 3 caracteres.")
    .max(50, "Usuário não pode ter mais de 50 caracteres."),
  email: z.string().email("Endereço de e-mail inválido."),
  age: z.coerce
    .number()
    .min(18, "Você deve ter pelo menos 18 anos.")
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ExampleFormPage() {
  const { count, increment } = useCounterStore(); // Usando o store Zustand

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

function onSubmit(values: FormValues) {
  console.log(JSON.stringify(values));
  alert(`Dados enviados: ${JSON.stringify(values, null, 2)}`);
  form.reset();
}

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Formulário de Exemplo</h1>
      <p className="mb-2">Contador Zustand: {count}</p>
      <Button onClick={increment} className="mb-4">
        Incrementar Contador
      </Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome de usuário" {...field} />
                </FormControl>
                <FormDescription>Seu nome público de exibição.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idade (Opcional)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Sua idade"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
