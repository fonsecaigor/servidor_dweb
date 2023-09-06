import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, ReturnDocument } from "typeorm"
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Photo } from "./Photo";
import { User } from "./User";
import { Rent } from "./Rent";

export type Gender = "masculino" | "feminino" | "unissex";
export type Material = "aluminio" | "carbono" | "ferro";

@Entity({name:"bikes"})
export class Bike {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false, length:30})
    color:string;

    @Column({nullable:false, length:10})
    size:string;

    @Column({nullable:false, type:"enum", enum: ["aluminio","carbono","ferro"]})
    material:Material;

    @Column({nullable:false, type:"enum", enum: ["masculino","feminino","unissex"]})
    gender:Gender;

    @Column({nullable:false})
    speedkit:number;

    @Column({nullable:false, length:10})
    aro:string;

    @Column({nullable:false, length:10})
    suspensao:string;

    @Column({nullable:false, length:10})
    hourlyvalue:string;

    @Column({nullable:false, length:10})
    dailyvalue:string;

    @Column({nullable:false, length:10})
    description:string;

    @ManyToOne( () => Brand )
    @JoinColumn({ name: "idbrand" })
    brand: Brand;

    @ManyToOne( () => Category )
    @JoinColumn({ name: "idcategory" })
    category: Category;

    @OneToMany(() => Photo, (photo) => photo.bike)
    photos: Photo[];

    @ManyToOne( () => User )
    @JoinColumn({ name: "iduser" })
    user: User;

    @OneToMany(() => Rent, (rent) => rent.bike)
    rents: Rent[];
}