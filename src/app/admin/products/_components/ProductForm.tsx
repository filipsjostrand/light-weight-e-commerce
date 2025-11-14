"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Button } from "../../../../components/ui/button"
import { formatCurrency } from "../../../lib/formatters"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addProduct, type AddProductFormState } from "../../_actions/products"


const initialState: AddProductFormState = {
    errors: {},
}

export function ProductForm() {
    const [state, action] = useFormState(addProduct, initialState)
    const [priceInCents, setPriceInCents] = useState<number>()
    const errors = state.errors ?? {}

    return (
        <form action={action} className="space-y-8">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
                {errors.name && <div className="text-destructive">{errors.name[0]}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="priceInCents">Price In Cents</Label>
                <Input
                    type="number"
                    id="priceInCents"
                    name="priceInCents"
                    required
                    value={priceInCents ?? ""}
                    onChange={e => setPriceInCents(Number(e.target.value) || undefined)}
                />
                <div className="text-muted-foreground">
                    {formatCurrency((priceInCents || 0) / 100)}
                </div>
                {errors.priceInCents && <div className="text-destructive">{errors.priceInCents[0]}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
                {errors.description && <div className="text-destructive">{errors.description[0]}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <Input type="file" id="file" name="file" required />
                {errors.file && <div className="text-destructive">{errors.file[0]}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" name="image" required />
                {errors.image && <div className="text-destructive">{errors.image[0]}</div>}
            </div>
            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Saving..." : "Save"}
        </Button>
    )
}