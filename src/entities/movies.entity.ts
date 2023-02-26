import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("movies")
class Movies {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 50, unique: true })
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @Column()
    duration: number

    @Column()
    price: number
}

export {
    Movies
}